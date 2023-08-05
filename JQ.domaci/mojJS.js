$(document).ready(function() {
    $("#dodajKorisnikaBtn").click(function() {
      $("#novaForma").show();
    });

    $("#zavrsiBtn").click(function() {
      var ime = $("#ime").val();
      var prezime = $("#prezime").val();
      var email = $("#email").val();
  
      var noviZaposleni = "<tr><td>" + ime + "</td><td>" + prezime + "</td><td>" + email + "</td></tr>";
      $("#korisniciTable tbody").append(noviZaposleni);
      $("#novaForma")[0].reset();
      $("#novaForma").hide();
    });
  });
  function ukloniRed(btn) {
    $(btn).closest("tr").remove();
  }
  $("#korisniciTable tbody td").click(function() {
    var red = $(this).closest("tr");
    var ime = red.find("td:eq(0)").text();
    var prezime = red.find("td:eq(1)").text();
    var email = red.find("td:eq(2)").text();
    var novoIme = prompt("Unesite novo ime:", ime);
    var novoPrezime = prompt("Unesite novo prezime:", prezime);
    var noviEmail = prompt("Unesite novi email:", email);
    red.find("td:eq(0)").text(novoIme);
    red.find("td:eq(1)").text(novoPrezime);
    red.find("td:eq(2)").text(noviEmail);
  });