import React from 'react'
import Head from '../Nav-Bar/Header'

const MyProfile = () => {
    return (
        <>
            <Head />
            <h1>From My MyProfile </h1>
            <table>
                <tr>
                    <th>My Missions</th>
                    <th>My Dragons</th>
                </tr>
                <tr>
                    <td>Telstar</td>
                    <td>Falcon 9</td>
                </tr>
                <tr>
                    <td>SES</td>
                    <td>Falcon Heavy</td>
                </tr>
                <tr>
                    <td>AsiaSat</td>
                    <td>Starship</td>
                </tr>
            </table>
        </>
    )
}

export default MyProfile