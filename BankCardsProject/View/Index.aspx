<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="BankCardsProject.View.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Style/bootstrapslim.css" rel="stylesheet" />
    <link href="../Style/Custome.css" rel="stylesheet" />
</head>
<body>
       <form id="form1" runat="server" action="#" method="post" onsubmit="return validateCard()">
        <div class="">
            <%----------------------NAVIGATION BAR ---------------%>
            <nav class="navbar navbar-expand-md navbar-light fixed-top py-4">
                <div class="container">
                    <a href="AvailableRecord.aspx" class="navbar-brand">
                        <img src="../Images/logo.png" width="50" height="50" />
                        <h3 class="d-inline align-middle">Credit Cards</h3>
                    </a>

                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#NavMenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="NavMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="AvailableRecord.aspx" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="Index.aspx" class="nav-link">New Card</a>
                            </li>
                            <li class="nav-item">
                                <a href="EditView.aspx" class="nav-link">View/Eidt </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <%------------------------------------- Navigation Bar Ending ---------------------------------------%>
                <div>
                    <div class="form mt-5">
                        <div class="container ">
                            <div class="row">

                                <div class="col-6 offset-6 m-auto">
                                    <div class="col-8 offset-4 m-auto p-3">
                                        <h2 class="text-danger">Add New Card</h2>
                                    </div>
                                    <%--Ajax Way--%>

                                    <div class="row form-group">
                                        <label for="DropDownListCards" class="col-sm-3">Card Name</label>
                                        <div class="col-sm-9">
                                            <div id="ErrorCards" class="text-danger"></div>
                                            <asp:DropDownList ID="DropDownListCards" runat="server" CssClass="form-control" onblur="DropDownCards()" onchange="CardsChange(this.value)">
                                                <asp:ListItem Value="0">Credit Card</asp:ListItem>
                                                <asp:ListItem>Master</asp:ListItem>
                                                <asp:ListItem>Visa</asp:ListItem>
                                                <asp:ListItem>Paypal</asp:ListItem>
                                            </asp:DropDownList>
                                            <%--<asp:RequiredFieldValidator ID="RequiredCard" runat="server" ErrorMessage="Select A Card" ControlToValidate="DropDownListCards" Display="Dynamic" InitialValue="0" CssClass="text-danger"></asp:RequiredFieldValidator>--%>
                                        </div>

                                    </div>

                                    <div class="row form-group">
                                        <label for="TextCreditLimit" class="col-sm-3">Credit Limit</label>
                                        <div class="col-sm-9">
                                            <div id="ErrorCreditLimit" class="text-danger"></div>
                                            <asp:TextBox ID="TextCreditLimit" runat="server" CssClass="form-control" Placeholder="1000 TO 9,999,999" onblur="CreditLimit()"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequiredCreditLimit" runat="server" ErrorMessage="Enter Credit Limit" ControlToValidate="TextCreditLimit" Display="Dynamic" CssClass="text-danger"></asp:RequiredFieldValidator>
                                            <asp:RegularExpressionValidator ID="RegularValidatorCreditLimit" runat="server" ErrorMessage="Enter Valid Amount" ControlToValidate="TextCreditLimit" Display="Dynamic" ValidationExpression="^[1-9][0-9]{0,6}$"></asp:RegularExpressionValidator>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <label for="TextAnnualCharges" class="col-sm-3">Annual Charges</label>
                                        <div class="col-sm-9">
                                            <div id="ErrorAnnualCharges" class="text-danger"></div>
                                            <asp:TextBox ID="TextAnnualCharges" runat="server" CssClass="form-control"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequiredAnnualCharges" runat="server" ErrorMessage="Enter Annual Charges" ControlToValidate="TextAnnualCharges" Display="Dynamic" CssClass="text-danger"></asp:RequiredFieldValidator>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <label for="TextCardNumber" class="col-sm-3">Card Number</label>
                                        <div class="col-sm-9">
                                            <%--<div id="showErrorCardNumber" class="text-danger"></div>--%>
                                            <asp:TextBox ID="TextCardNumber" runat="server" CssClass="form-control"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequiredCardNumber" runat="server" ErrorMessage="Enter Card Number" ControlToValidate="TextCardNumber" Display="Dynamic" CssClass="text-danger"></asp:RequiredFieldValidator>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-3"></div>
                                        <div class="col-9">
                                            <%--<asp:Button ID="SubmitBtn" runat="server" Text="Submit" CssClass="btn btn-info" />--%>
                                            <input type="button" id="SubmitBtn" value="Submit"/>

                                            <br>
                                            <asp:Label ID="Label1" runat="server" CssClass="text-danger" Text=""></asp:Label>
                                            <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    </form>
    <script src="../Script/Jqeury.js"></script>
    <script src="../Script/callApi.js"></script>
</body>
</html>
