$(document).ready(function () {
            $("#button").click(function () {
                var toAdd = $("GroceryListItem").val();
                $(".items").append('<div class="item">' + toAdd + '</div>');
            });