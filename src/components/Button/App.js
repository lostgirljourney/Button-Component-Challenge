import React from 'react';
import ReactDOM from 'react-dom';
import TextPartMain from './TextPartMain';
import ButtonNormal from './Button';
import './App.css';

export default function App() {
    return (
        <div className="button-body">
            <h1 className="topic">Buttons</h1>
            <div className="style">
                <TextPartMain text="<Button />" />
                <ButtonNormal />
            </div>
            <div className="style">
                <TextPartMain text="<Button variant = &ldquo;outline&rdquo; />" />
                <ButtonNormal variant="outline" />
            </div>
            <div className="style">
                <TextPartMain text="<Button variant = &ldquo;text&rdquo; />" />
                <ButtonNormal variant="text" />
            </div>
            <div className="style">
                <TextPartMain text="<Button disableShadow />" />
                <ButtonNormal disableShadow />
            </div>
            <div className="style">
                <TextPartMain text="<Button disabled />" />
                <ButtonNormal disabled />
            </div>
            <div className="style">
                <TextPartMain text="<Button variant = &ldquo;text&rdquo; disabled />" />
                <ButtonNormal variant="text" disabled />
            </div>
            <div className="row">
                <div className="style">
                    <TextPartMain text="<Button startIcon = &ldquo;local_grocery_store&rdquo; />" />
                    <ButtonNormal startIcon="local_grocery_store" />
                </div>
                <div className="style">
                    <TextPartMain text="<Button endIcon = &ldquo;local_grocery_store&rdquo; />" />
                    <ButtonNormal endIcon="local_grocery_store" />
                </div>
            </div>
            <div className="row">
                <div className="style">
                    <TextPartMain text="<Button size = &ldquo;sm&rdquo; />" />
                    <ButtonNormal size="sm" />
                </div>
                <div className="style">
                    <TextPartMain text="<Button size = &ldquo;md&rdquo; />" />
                    <ButtonNormal size="md" />
                </div>
                <div className="style">
                    <TextPartMain text="<Button size = &ldquo;lg&rdquo; />" />
                    <ButtonNormal size="lg" />
                </div>
            </div>
            <div className="row">
                <div className="stylex">
                    <TextPartMain text="<Button color = &ldquo;default&rdquo; />" />
                    <ButtonNormal color="default" />
                </div>
                <div className="stylex">
                    <TextPartMain text="<Button color = &ldquo;primary&rdquo; />" />
                    <ButtonNormal color="primary" />
                </div>
                <div className="stylex">
                    <TextPartMain text="<Button color = &ldquo;secondary&rdquo; />" />
                    <ButtonNormal color="secondary" />
                </div>
                <div className="stylex">
                    <TextPartMain text="<Button color = &ldquo;danger&rdquo; />" />
                    <ButtonNormal color="danger" />
                </div>
            </div>
        </div>
    );
}