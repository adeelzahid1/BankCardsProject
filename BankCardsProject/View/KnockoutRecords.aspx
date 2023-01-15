<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="KnockoutRecords.aspx.cs" Inherits="BankCardsProject.View.KnockoutRecords" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Style/bootstrapslim.css" rel="stylesheet" />
    <link href="../Style/Custome.css" rel="stylesheet" />
    <%-- <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" />--%>
</head>
<body>
    <form id="form1" runat="server">

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

        <div class="m-5">
            <div class="form mt-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-10 offset-2 m-auto">
                            <div class="col-8 offset-4 m-auto p-3">
                                <h2 class="text-danger">Details About Cards</h2>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm-12">
                                    <div class="row">

                                        <div class="col-sm-12 col-md-2">
                                            <input type="button" value="All Record" class="btn btn-dark" data-bind="event: { click: viewModel.AllRec }" />
                                        </div>

                                        <div class="col-sm-12 col-md-4 form-group">
                                            <asp:DropDownList ID="DropDownListCards" runat="server" CssClass="form-control" data-bind="value: selectValue, valueAllowUnset: true">
                                                <%--enable: selectedChoice"--%><%--data-bind="value: selectedValue, optionsText:???"--%>
                                                <asp:ListItem Value="0" class="dropdown-item disabled">-- Select Credit Card --</asp:ListItem>
                                                <asp:ListItem Value="1">Master</asp:ListItem>
                                                <asp:ListItem Value="2">Visa</asp:ListItem>
                                                <asp:ListItem Value="3">Paypal</asp:ListItem>
                                                <asp:ListItem Value="4">All Data</asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                        <div class="col-sm-12 col-md-3 form-group">
                                            <input type="text" id="searchTable" class="form-control" placeholder="Search Table" />
                                        </div>
                                        
                                        <div class="col-sm-12 col-md-3 form-group">
                                            <input type="text" id="search" class="form-control" placeholder="Search Database" />
                                            <%--data-bind="value: viewModel.searchTxt, valueUpdate: 'afterkeydown'"--%>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="tableinfo">
                <div class="container">
                    <div class="row mt-1">
                        <%--<div class="col-1"></div>--%>
                        <div class="col-10 offset-2 m-auto">

                            <table class="table table-hover " id="BankCardGrid">
                                <thead class="table-dark">
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Limit</th>
                                        <th>Charges</th>
                                        <th>Number</th>
                                    </tr>
                                </thead>
                                <tbody id="ttt" data-bind="foreach: viewModel.Cards ">
                                    <%--data-bind="foreach: {data: Accounts, as:'Account'}--%><%--data-bind="foreach: Accounts"--%>
                                    <tr>
                                        <td data-bind="text: Id"></td>
                                        <td data-bind="text: Name"></td>
                                        <td data-bind="text: Limit"></td>
                                        <td data-bind="text: Charges"></td>
                                        <td data-bind="text: Number"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <%--<div class="col-1"></div>--%>
                    </div>
                </div>
                <hr class="mt-5" />
            </div>
        </div>


    </form>
    <script src="../Script/Jqeury.js"></script>
    <script src="../Script/knockout-3.5.1.js"></script>
    <%--<script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"> </script>--%>
    <script src="../Script/KnockoutRecord.js"></script>
    <script src="../Script/Bootstrap.js"></script>
</body>
</html>

