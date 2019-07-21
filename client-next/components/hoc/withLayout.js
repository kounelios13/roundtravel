import AppRouter from "../router/app-router";
import Head from 'next/head'
import React from "react";
import '../../styles/global.scss'


const withLayout = (Page) => {
    return class extends React.Component {
        static getInitialProps(ctx) {
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
            return {}
        }

        render() {
            return (
                <div className='container-fluid p-0 m-0'>
                    <Head>
                        <title>RoundTravel</title>
                        <link rel="stylesheet"
                              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet" />
                    </Head>
                    <AppRouter/>
                    <Page {...this.props}/>
                </div>
            )
        }
    }
}

export default withLayout