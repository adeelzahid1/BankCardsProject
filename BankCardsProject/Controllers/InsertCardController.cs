using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Script.Serialization;
using BankCardsProject.Models;

namespace myApiProject.Controllers
{
    public class InsertCardController : ApiController
    {
        //-------------------------------------------------------------------------//
        //----------------------- Post /Insert A Card

        [HttpPost]
        public IHttpActionResult PostCards(Cards cards)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    if (cards != null)
                    {
                        BankCardsContext Context = new BankCardsContext();
                        if (cards.CardName == "Master")
                        {
                            var master = new masterCard();
                            master.cardType = cards.CardName;
                            master.cardLimit = cards.CreditLimit;
                            master.cardCharges = cards.AnnualCharges;
                            master.cardNumber = cards.CardNumber;
                            Context.masterCards.Add(master);
                            if (master.cardType != null && master.cardLimit != null && master.cardCharges != null &&
                                master.cardNumber != null)
                            {
                                Context.SaveChanges();
                                return Ok("New " + cards.CardName + " Card Inserted Successfully :");
                            }
                            else
                            {
                                //return NotFound();
                                return Content(HttpStatusCode.BadRequest, "Bad Request");
                            }
                        }
                        else if (cards.CardName == "Visa")
                        {
                            var visa = new visa();
                            visa.cardType = cards.CardName;
                            visa.cardLimit = cards.CreditLimit;
                            visa.cardCharges = cards.AnnualCharges;
                            visa.cardNumber = cards.CardNumber;
                            Context.visas.Add(visa);
                            if (visa.cardType != null && visa.cardLimit != null && visa.cardCharges != null &&
                                visa.cardNumber != null)
                            {
                                int a = Context.SaveChanges();
                                if (a > 0)
                                {
                                    return Ok("New " + cards.CardName + " Card Inserted Successfully :");
                                }
                            }

                            return NotFound();
                        }
                        else if (cards.CardName == "Paypal")
                        {
                            var paypal = new paypal();
                            paypal.cardType = cards.CardName;
                            paypal.cardLimit = cards.CreditLimit;
                            paypal.cardCharges = cards.AnnualCharges;
                            paypal.cardNumber = cards.CardNumber;
                            Context.paypals.Add(paypal);
                            if (paypal.cardType != null && paypal.cardLimit != null && paypal.cardCharges != null &&
                                paypal.cardNumber != null)
                            {
                                Context.SaveChanges();
                                return Ok("New " + cards.CardName + " Card Inserted Successfully :");
                            }
                            else
                            {
                                return NotFound();
                            }
                        }
                        else
                        {
                            return NotFound();
                        }

                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return Ok("Something Went Wrong ... ");
                }

            }
            else
            {
                return NotFound();
            }
        }

        //-------------------------------------------------------------------------//
        //----------------------- Get One Card
        [HttpGet]
        public IHttpActionResult GetAllEmployee()
        {
            List<Cards> cardlist = new List<Cards>();
            using (BankCardsContext Context = new BankCardsContext())
            {
                var card = Context.paypals.ToList();
                foreach (var item in card)
                {
                    try
                    {
                        Cards cardd = new Cards()
                        {
                            CardName = item.cardType,
                            CreditLimit = Convert.ToInt32(item.cardLimit),
                            AnnualCharges = Convert.ToInt32(item.cardCharges),
                            CardNumber = Convert.ToInt32(item.cardNumber)
                        };
                        cardlist.Add(cardd);
                    }
                    catch (Exception)
                    {
                        return Ok("Error : .... ");
                    }
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok((js.Serialize(cardlist)));
        }

        //-------------------------------------------------------------------------//
        //-----------------------  GridView by Giving Card Id
        [HttpGet]
        public IHttpActionResult GetAllEmployee(int id)
        {
            List<Cards> cardlist = new List<Cards>();
            using (BankCardsContext Context = new BankCardsContext())
            {
                if (id == 1)
                {
                    var card = Context.masterCards.ToList();
                    foreach (var item in card)
                    {
                        try
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardlist.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardlist.Add(cardd);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else if (id == 2)
                {
                    var card = Context.visas.ToList();
                    foreach (var item in card)
                    {
                        try
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardlist.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardlist.Add(cardd);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else if (id == 3)
                {
                    var card = Context.paypals.ToList();
                    foreach (var item in card)
                    {
                        try
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardlist.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardlist.Add(cardd);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else { return NotFound(); }

            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok((js.Serialize(cardlist)));
        }

        //-------------------------------------------------------------------------//
        //----------------------- Get All Ids of a Card by Giving a Card Id

        [HttpGet]
        public IHttpActionResult GetAllEmployeeId(int id)
        {
            List<CardsId> cardIdList = new List<CardsId>();

            using (BankCardsContext Context = new BankCardsContext())
            {
                if (id == 1)
                {
                    var CIds = Context.masterCards.Where(m => m.cardType.Equals("Master")).Select(s => new { s.id }).ToList();
                    foreach (var item in CIds)
                    {
                        try
                        {
                            CardsId cid = new CardsId()
                            {
                                cardId = Convert.ToInt32(item.id)
                            };
                            cardIdList.Add(cid);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else if (id == 2)
                {
                    var CIds = Context.visas.Where(m => m.cardType.Equals("Visa")).Select(s => new { s.id }).ToList();
                    foreach (var item in CIds)
                    {
                        try
                        {
                            CardsId cid = new CardsId()
                            {
                                cardId = Convert.ToInt32(item.id)
                            };
                            cardIdList.Add(cid);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else if (id == 3)
                {
                    var CIds = Context.paypals.Where(m => m.cardType.Equals("Paypal")).Select(s => new { s.id }).ToList();
                    foreach (var item in CIds)
                    {
                        try
                        {
                            CardsId cid = new CardsId()
                            {
                                cardId = Convert.ToInt32(item.id)
                            };
                            cardIdList.Add(cid);
                        }
                        catch (Exception)
                        {
                            return Ok("Error : .... ");
                        }
                    }
                }
                else { return NotFound(); }

            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok((js.Serialize(cardIdList)));
            //return Ok(cardIdList);
        }

        //-------------------------------------------------------------------------//
        //----------------------- Get All Data of a Card by Giving a Card Id & Card Name

        [HttpPost]
        public IHttpActionResult PostFindRecord(Cards cards)
        {
            List<Cards> cardInfo = new List<Cards>();

            if (ModelState.IsValid)
            {
                try
                {
                    if (cards != null)
                    {
                        BankCardsContext Context = new BankCardsContext();

                        if (cards.CardName == "Master")
                        {
                            var obj = Context.masterCards.Where(m => m.cardType.Equals(cards.CardName)).Where(m => m.id.Equals(cards.CardId)).FirstOrDefault();
                            try
                            {
                                Cards cardd = new Cards()
                                {
                                    CardId = Convert.ToInt32(obj.id),
                                    CardName = obj.cardType,
                                    CreditLimit = Convert.ToInt32(obj.cardLimit),
                                    AnnualCharges = Convert.ToInt32(obj.cardCharges),
                                    CardNumber = Convert.ToInt32(obj.cardNumber)
                                };
                                cardInfo.Add(cardd);
                            }
                            catch (Exception)
                            {
                                return Ok("Error : .... ");
                            }
                        }
                        //------------Visa
                        if (cards.CardName == "Visa")
                        {
                            var obj = Context.visas.Where(v => v.cardType.Equals(cards.CardName)).Where(v => v.id.Equals(cards.CardId)).FirstOrDefault();
                            try
                            {
                                Cards cardd = new Cards()
                                {
                                    CardId = Convert.ToInt32(obj.id),
                                    CardName = obj.cardType,
                                    CreditLimit = Convert.ToInt32(obj.cardLimit),
                                    AnnualCharges = Convert.ToInt32(obj.cardCharges),
                                    CardNumber = Convert.ToInt32(obj.cardNumber)
                                };
                                cardInfo.Add(cardd);
                            }
                            catch (Exception)
                            {
                                return Ok("Error : .... ");
                            }
                        }

                        //-----------Paypal
                        if (cards.CardName == "Paypal")
                        {
                            var obj = Context.paypals.Where(p => p.cardType.Equals(cards.CardName)).Where(p => p.id.Equals(cards.CardId)).FirstOrDefault();
                            try
                            {
                                Cards cardd = new Cards()
                                {
                                    CardId = Convert.ToInt32(obj.id),
                                    CardName = obj.cardType,
                                    CreditLimit = Convert.ToInt32(obj.cardLimit),
                                    AnnualCharges = Convert.ToInt32(obj.cardCharges),
                                    CardNumber = Convert.ToInt32(obj.cardNumber)
                                };
                                cardInfo.Add(cardd);
                            }
                            catch (Exception)
                            {
                                return Ok("Error : .... ");
                            }
                        }

                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                { return NotFound(); }

            }
            else
            {
                return NotFound();
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok(js.Serialize(cardInfo));
        }

        //-------------------------------------------------------------------------//
        //----------------------- Delete a Specific Record by Giving a Card Id & Card Name

        [HttpDelete]
        public IHttpActionResult DeleteARecord(Cards cards)
        {
            BankCardsContext Context = new BankCardsContext();
            if (cards.CardName == "Master")
            {
                var obj = Context.masterCards.Where(m => m.id.Equals(cards.CardId)).FirstOrDefault();
                if (obj != null)
                {
                    Context.masterCards.Remove(obj);
                    Context.SaveChanges();
                    return Ok(" Card Deleted Successfully :");
                }
                else { return NotFound(); }
            }
            else if (cards.CardName == "Visa")
            {
                var obj = Context.visas.Where(v => v.id.Equals(cards.CardId)).FirstOrDefault();
                if (obj != null)
                {
                    Context.visas.Remove(obj);
                    Context.SaveChanges();
                    return Ok(" Card Deleted Successfully :");
                }
                else { return NotFound(); }
            }
            else if (cards.CardName == "Paypal")
            {
                var obj = Context.paypals.Where(p => p.id.Equals(cards.CardId)).FirstOrDefault();
                if (obj != null)
                {
                    Context.paypals.Remove(obj);
                    Context.SaveChanges();
                    return Ok(" Card Deleted Successfully :");
                }
                else { return NotFound(); }
            }
            else
            {
                return NotFound();
            }
        }

        //-------------------------------------------------------------------------//
        //----------------------- Update/Put a Specific Record by Giving All Input Fields Data

        [HttpPut]
        public IHttpActionResult UpdateRecrod(Cards card)
        {
            using (BankCardsContext Context = new BankCardsContext())
            {
                // --- Master 
                if (card.CardName == "Master")
                {
                    var obj = Context.masterCards.Where(m => m.id.Equals(card.CardId)).FirstOrDefault();
                    obj.cardType = card.CardName;
                    obj.cardLimit = Convert.ToInt32(card.CreditLimit);
                    obj.cardCharges = Convert.ToInt32(card.AnnualCharges);
                    obj.cardNumber = Convert.ToInt32(card.CardNumber);

                    if (obj.cardType != null && obj.cardLimit != null && obj.cardCharges != null && obj.cardNumber != null)
                    {
                        Context.Entry(obj).State = System.Data.Entity.EntityState.Modified;
                        Context.SaveChanges();
                        return Ok(card.CardName + " Card Updated Successfully :");
                    }
                    else { return NotFound(); }
                }
                // --- Visa 
                if (card.CardName == "Visa")
                {
                    var obj = Context.visas.Where(m => m.id.Equals(card.CardId)).FirstOrDefault();
                    obj.cardType = card.CardName;
                    obj.cardLimit = Convert.ToInt32(card.CreditLimit);
                    obj.cardCharges = Convert.ToInt32(card.AnnualCharges);
                    obj.cardNumber = Convert.ToInt32(card.CardNumber);

                    if (obj.cardType != null && obj.cardLimit != null && obj.cardCharges != null && obj.cardNumber != null)
                    {
                        Context.Entry(obj).State = System.Data.Entity.EntityState.Modified;
                        Context.SaveChanges();
                        return Ok(card.CardName + " Card Updated Successfully :");
                    }
                    else { return NotFound(); }
                }
                // --- Paypal 
                if (card.CardName == "Paypal")
                {
                    var obj = Context.paypals.Where(m => m.id.Equals(card.CardId)).FirstOrDefault();
                    obj.cardType = card.CardName;
                    obj.cardLimit = Convert.ToInt32(card.CreditLimit);
                    obj.cardCharges = Convert.ToInt32(card.AnnualCharges);
                    obj.cardNumber = Convert.ToInt32(card.CardNumber);

                    if (obj.cardType != null && obj.cardLimit != null && obj.cardCharges != null && obj.cardNumber != null)
                    {
                        Context.Entry(obj).State = System.Data.Entity.EntityState.Modified;
                        Context.SaveChanges();
                        return Ok(card.CardName + " Card Updated Successfully :");
                    }
                    else { return NotFound(); }
                }
                // --- Wrong Entry 
                else
                {
                    return NotFound();
                }

            }
        }


        //-------------------------------------------------------------------------//
        //-----------------------  GridView All Data Table
        [HttpGet]
        public IHttpActionResult GetAllEmpl()
        {
            List<Cards> cardlist = new List<Cards>();
            using (BankCardsContext Context = new BankCardsContext())
            {
                var cardMaster = Context.masterCards.ToList();
                foreach (var item in cardMaster)
                {
                    try
                    {
                        Cards cardd = new Cards()
                        {
                            CardId = cardlist.Count + 1,
                            CardName = item.cardType,
                            CreditLimit = Convert.ToInt32(item.cardLimit),
                            AnnualCharges = Convert.ToInt32(item.cardCharges),
                            CardNumber = Convert.ToInt32(item.cardNumber)
                        };
                        cardlist.Add(cardd);
                    }
                    catch (Exception)
                    {
                        return NotFound();
                    }
                }

                var cardVisa = Context.visas.ToList();
                foreach (var item in cardVisa)
                {
                    try
                    {
                        Cards cardd = new Cards()
                        {
                            CardId = cardlist.Count + 1,
                            CardName = item.cardType,
                            CreditLimit = Convert.ToInt32(item.cardLimit),
                            AnnualCharges = Convert.ToInt32(item.cardCharges),
                            CardNumber = Convert.ToInt32(item.cardNumber)
                        };
                        cardlist.Add(cardd);
                    }
                    catch (Exception)
                    {
                        return NotFound();
                    }
                }

                var cardPaypal = Context.paypals.ToList();
                foreach (var item in cardPaypal)
                {
                    try
                    {
                        Cards cardd = new Cards()
                        {
                            CardId = cardlist.Count + 1,
                            CardName = item.cardType,
                            CreditLimit = Convert.ToInt32(item.cardLimit),
                            AnnualCharges = Convert.ToInt32(item.cardCharges),
                            CardNumber = Convert.ToInt32(item.cardNumber)
                        };
                        cardlist.Add(cardd);
                    }
                    catch (Exception)
                    {
                        return NotFound();
                    }
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok((js.Serialize(cardlist)));
        }

        //-------------------------------------------------------------------------//
        //----------------------- Get All Data of a Card by Giving a Card Id & Card Name

        [HttpPost]
        public IHttpActionResult FindTxtSearch(Cards cards)
        {
            List<Cards> cardInfo = new List<Cards>();

            if (ModelState.IsValid)
            {
                if (cards != null)
                {
                    BankCardsContext Context = new BankCardsContext();
                    var movies = Context.masterCards.Where(m => m.cardType.Contains(cards.CardName)).ToList();

                    var masterC = Context.masterCards.ToList();
                    foreach (var item in movies)
                    {
                        if (item.cardType == cards.CardName || item.cardNumber == cards.CardNumber || item.cardLimit == cards.CardNumber || item.cardCharges == cards.CardNumber || item.id == cards.CardNumber)
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardInfo.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardInfo.Add(cardd);
                        }
                    }

                    //visa
                    var visaC = Context.visas.ToList();
                    foreach (var item in visaC)
                    {
                        if (item.cardType == cards.CardName || item.cardNumber == cards.CardNumber || item.cardLimit == cards.CardNumber || item.cardCharges == cards.CardNumber || item.id == cards.CardNumber)
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardInfo.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardInfo.Add(cardd);
                        }
                    }

                    //paypal
                    var paypalC = Context.paypals.ToList();
                    foreach (var item in paypalC)
                    {
                        if (item.cardType == cards.CardName || item.cardNumber == cards.CardNumber || item.cardLimit == cards.CardNumber || item.cardCharges == cards.CardNumber || item.id == cards.CardNumber)
                        {
                            Cards cardd = new Cards()
                            {
                                CardId = cardInfo.Count + 1,
                                CardName = item.cardType,
                                CreditLimit = Convert.ToInt32(item.cardLimit),
                                AnnualCharges = Convert.ToInt32(item.cardCharges),
                                CardNumber = Convert.ToInt32(item.cardNumber)
                            };
                            cardInfo.Add(cardd);
                        }
                    }

                }
            }
            else
            {
                return NotFound();
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            return Ok(js.Serialize(cardInfo));
        }
    }
}





public class Cards
{
    private string _cardName;
    private int _creditLimit;
    private int _annualCharges;
    private int _cardNumber;
    private int _cardId;

    public int CardId
    {
        get { return _cardId; }
        set { _cardId = value; }
    }
    public string CardName
    {
        get { return _cardName; }
        set { _cardName = value; }
    }
    public int CreditLimit
    {
        get { return _creditLimit; }
        set { _creditLimit = value; }
    }
    public int AnnualCharges
    {
        get { return _annualCharges; }
        set { _annualCharges = value; }
    }
    public int CardNumber
    {
        get { return _cardNumber; }
        set { _cardNumber = value; }
    }
}

public class CardsId
{
    private int _cardId;

    public int cardId
    {
        get { return _cardId; }
        set { _cardId = value; }
    }

}
