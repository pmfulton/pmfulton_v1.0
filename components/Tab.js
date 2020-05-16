import Head from 'next/head'

function Tab(props) {
    return(
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/apple-touch-icon.png"/>
        </Head>
    )
}

export default Tab