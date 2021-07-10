import React from 'react';
import './Buttons.css';
import { MdShoppingCart } from "react-icons/md";

export default function ButtonNormal(type) {
    // Object.keys(type).length
    // console.log(Object.keys(type).length);
    // console.log(type.disableShadow);

    let variantjs, innertext = "Default";

    let classes = ["btn"];

    if ((!('variant' in type)) && (Object.keys(type).length === 0)) {
        variantjs = "normal";
        classes.push(variantjs);
    }
    else {
        variantjs = type.variant;
        classes.push(variantjs);
    }

    if (type.disableShadow) {
        classes.push("disableShadow");
    }

    if (type.disabled) {
        classes.push("disabled");
        innertext = "Disabled";
    }

    let index = classes.indexOf(undefined);
    if (index !== -1) {
        classes.splice(index, 1);
    }
    console.log(classes);
    classes = classes.join(' ');
    console.log(classes);

    if ('size' in type) {
        classes = (classes + " " + type.size);
    }

    if ('color' in type) {
        classes = (classes + " " + type.color);
        if (!(type.color === "primary"))
            innertext = type.color.charAt(0).toUpperCase() + type.color.slice(1);
    }

    if ('startIcon' in type) {
        classes = (classes + " " + type.icon);
        return (
            <button className={classes}>
                <MdShoppingCart /> {innertext}
            </button>
        );
    }

    if ('endIcon' in type) {
        classes = (classes + " " + type.icon);
        return (
            <button className={classes}>
                {innertext}  <MdShoppingCart />
            </button>
        );
    }

    return (
        <button className={classes}>
            {innertext}
        </button>
    );
}