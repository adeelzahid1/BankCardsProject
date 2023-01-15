<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EditView.aspx.cs" Inherits="BankCardsProject.View.EditView" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Style/bootstrapslim.css" rel="stylesheet" />
    <link href="../Style/Custome.css" rel="stylesheet" />
</head>
<body>
    <form id="form2" runat="server">
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
                            <div class="col-10 offset-2 m-auto p-3">
                                <h2 class="text-danger">View -Edit -Update -Delete</h2>
                            </div>
                            <div class="row form-group">
                                <label for="DropDownListCards" class="col-sm-3">Card Name</label>
                                <div class="col-sm-9">
                                    <div id="ErrorCards" class="text-danger"></div>
                                    <asp:DropDownList ID="DropDownListCards" runat="server" CssClass="form-control">
                                        <asp:ListItem Value="0" class="dropdown-item disabled">-- Select Credit Card --</asp:ListItem>
                                        <asp:ListItem Value="1">Master</asp:ListItem>
                                        <asp:ListItem Value="2">Visa</asp:ListItem>
                                        <asp:ListItem Value="3">Paypal</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>

                            <div class="row form-group DropDownListId">
                                <label for="DropDownListId" class="col-sm-3">Card Id</label>
                                <div class="col-sm-9">

                                   <%-- <asp:DropDownList ID="" runat="server" CssClass="form-control">
                                        <asp:ListItem Value="0">-- Select ID --</asp:ListItem>
                                    </asp:DropDownList>--%>

                                    <select id="DropDownListId" class="form-control">
                                        <option value="0">0</option>
                                    </select>


                                </div>
                            </div>

                            <div class="row form-group TextCreditLimit">
                                <label for="TextCreditLimit" class="col-sm-3">Credit Limit</label>
                                <div class="col-sm-9">
                                    <div id="ErrorCreditLimit" class="text-danger"></div>
                                    <asp:TextBox ID="TextCreditLimit" runat="server" CssClass="form-control" Placeholder="1000 TO 9,999,999" ></asp:TextBox>
                                </div>
                            </div>

                            <div class="row form-group TextAnnualCharges">
                                <label for="TextAnnualCharges" class="col-sm-3">Annual Charges</label>
                                <div class="col-sm-9">
                                    <div id="ErrorAnnualCharges" class="text-danger"></div>
                                    <asp:TextBox ID="TextAnnualCharges" runat="server" CssClass="form-control"></asp:TextBox>
                                </div>
                            </div>

                            <div class="row form-group TextCardNumber">
                                <label for="TextCardNumber" class="col-sm-3">Card Number</label>
                                <div class="col-sm-9">
                                    <div id="showErrorEmail" class="text-danger"></div>
                                    <asp:TextBox ID="TextCardNumber" runat="server" CssClass="form-control"></asp:TextBox>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-sm-8 offset-4">
                                    <input type="button" id="EditBtn" value="Edit" class="btn btn-warning" />
                                    <input type="button" id="CancelBtn" value="Cancel" class="btn btn-info" />
                                    <input type="button" id="UpdateBtn" value="Update" class="btn btn-success" />
                                    <input type="button" id="DeleteBtn" value="Delete" class="btn btn-danger" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    </form>
    <script src="../Script/Jqeury.js"></script>
    <script src="../Script/EditView.js"></script>
    <script src="../Script/Bootstrap.js"></script>

</body>
</html>

