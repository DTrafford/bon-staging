import React from "react";
import { Wrapper } from "./styles";
import "./spinkit.min.css";

export default function Spinner() {
  // function browserSupportsCSSProperty(propertyName) {
  //   var elm = document.createElement("div");
  //   propertyName = propertyName.toLowerCase();

  //   if (elm.style[propertyName] != undefined) return true;

  //   var propertyNameCapital =
  //       propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
  //     domPrefixes = "Webkit Moz ms O".split(" ");

  //   for (var i = 0; i < domPrefixes.length; i++) {
  //     if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
  //       return true;
  //   }

  //   return false;
  // }
  // if (!browserSupportsCSSProperty("animation")) {
  //   return;
  // }
  return (
    <Wrapper>
      <div className="sk-fold">
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
      </div>
    </Wrapper>
  );
}
