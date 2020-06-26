import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './galactic-age-calculator';

$(document).ready(function () {
  let userAge = new GalacticAge;
  $('#galactic-id').submit(function (event) {
    event.preventDefault();

    const userSex = $("input:radio[name=user-sex]:checked").val();
    const userSmoking = $("input:radio[name=user-smoking]:checked");
    const userExercise = $("input:radio[name=user-exercise]:checked");

    userAge.earthAge = $("input#user-age");
    userAge.calculateAge();
    userAge.calculateLifeExpect(userSex, userSmoking, userExercise);

    $("#user-name-output").text($("input#user-name").val());
    $("#mercury-age").text(userAge.mercAge);
    $("#venus-age").text(userAge.venAge);
    $("#mars-age").text(userAge.marsAge);
    $("#jupiter-age").text(userAge.jupAge);
    $("#earth-expect").text(userAge.lifeExpect);
    $("#earth-years-left").text(userAge.lifeExpect - userAge.earthAge);
    $("#mercury-years-left").text(userAge.yearsLeft('mercury'));
    $("#venus-years-left").text(userAge.yearsLeft('venus'));
    $("#mars-years-left").text(userAge.yearsLeft('mars'));
    $("#jupiter-years-left").text(userAge.yearsLeft('jupiter'));
  });
});