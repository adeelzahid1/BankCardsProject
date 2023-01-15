<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AvailableRecord.aspx.cs" Inherits="BankCardsProject.View.AvailableRecord" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Style/bootstrapslim.css" rel="stylesheet" />
    <link href="../Style/Custome.css" rel="stylesheet" />
    <%--<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" />--%>
    <link href="../Style/jquery.dataTables.min.css" rel="stylesheet" />
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

        <div>
            <div class="form mt-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-6 offset-6 m-auto">
                            <div class="col-8 offset-4 m-auto p-3">
                                <h2 class="text-danger">Details About Cards</h2>
                            </div>
                            <div class="row form-group">
                                <label for="DropDownListCards" class="col-sm-3"><strong>Card Name</strong> </label>
                                <div class="col-sm-9">
                                    <div id="ErrorCards" class="text-danger"></div>
                                    <asp:DropDownList ID="DropDownListCards" runat="server" CssClass="form-control">
                                        <asp:ListItem Value="0" class="dropdown-item disabled">-- Select Credit Card --</asp:ListItem>
                                        <asp:ListItem Value="1">Master</asp:ListItem>
                                        <asp:ListItem Value="2">Visa</asp:ListItem>
                                        <asp:ListItem Value="3">Paypal</asp:ListItem>
                                        <asp:ListItem Value="4">All Data</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="tableinfo">
                <div class="container">
                    <div class="row mt-1">
                        <div class="col-12 ">

                            <table id="datatable" class="table table-bordered">
                                <thead class="bg-primary text-white">
                                    <tr>
                                        <th id="cId">No </th>
                                        <th id="cName">Name</th>
                                        <th id="cLimit">Deposit Limit</th>
                                        <th id="cCharges">Charges</th>
                                        <th id="cNumber">Card Number</th>
                                    </tr>
                                </thead>
                                <%--<tbody>
                            </tbody>--%>
                            </table>
                        </div>
                    </div>
                </div>
                <hr class="mt-5"/>
            </div>


        </div>
    </form>
    <script src="../Script/Jqeury.js"></script>
    <script src="../Script/jquery.dataTables.min.js"></script>
    <%--<script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"> </script>--%>
    <script src="../Script/GetRecored.js"></script>
    <script src="../Script/Bootstrap.js"></script>
</body>
</html>
