import React from 'react'
import { Redirect } from 'react-router'
export default function indexrouterComponent() {
    return (
        <div>
            <Redirect to="/home"/>
        </div>
    )
}
