import React, { useState } from "react";
import { Button, Drawer } from "antd";

export default function MyDrawer({
    children,
    isOpen,
    setIsOpen,
    title = "Basic Drawer",
}) {
    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
                Open
            </Button> */}
            <Drawer title={title} onClose={onClose} open={isOpen} size="large">
                {children}
            </Drawer>
        </>
    );
}
