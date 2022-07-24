import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import AddUser from "../components/Users/AddUser";
import UsersList from "../components/Users/UsersList";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import ErrorModal from "../components/UI/ErrorModal";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/AddUser">
                <AddUser/>
            </ComponentPreview>
            <ComponentPreview path="/UsersList">
                <UsersList/>
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/ErrorModal">
                <ErrorModal/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;