import React, { Component } from 'react';

import ReactHelmet from 'react-helmet';

import { withRouter } from 'react-router-dom';

const NOT_FOUND_META = {
    seoTitle: '404',
    seoDescription: '404',
    seoKeywords: '404',
    canonical: ''
};

const routes = [
    { id: 'main', path: '/', exact: true },
    { id: 'products', path: '/products', exact: false },
    { id: 'about', path: '/about', exact: true }
];

class Helmet extends Component {
    constructor (...args) {
        super(...args);

        this.state = {
            meta: this.getMeta(this.props)
        };
    }

    getMeta = ({ location: { pathname } }) => {
        // const NOT_FOUND_ROUTE_ID = 'notFound';
        /* eslint-disable-next-line max-len */
        const KEYWORDS = 'вишиванки, свята, святковий одяг, новорічні костюми, сценічний одяг, сцена, костюми для виступів, пошиття костюмів';
        const IMAGE = 'https://i.imgur.com/nTkETjE.png';
        const SITE_NAME = 'Rozmay';
       
        const match = routes.find(item => item.path === pathname)

        if (match) {
            return {
                lang: 'ua',
                title: 'Rozmay - Вишито серцем',
                description: 'Вишиванки на будь-який смак',
                siteName: SITE_NAME,
                keywords: KEYWORDS,
                image: IMAGE,
                canonical: `${pathname}`
                // langLinks: [
                //     { lang: 'ua', link: `${pathname}` }
                // ]
            };
        }

        return NOT_FOUND_META;
    };

    render () {
        const { meta } = this.state;

        return <ReactHelmet>
            <html lang={meta.lang} />
            <title>{meta.title}</title>
            <meta name='description' content={meta.description} />
            <meta name='og:site_name' content={meta.siteName} />
            <meta name='og:title' content={meta.title} />
            <meta name='og:description' content={meta.description} />
            <meta name='og:image' content={meta.image} />
            <meta name='keywords' content={meta.keywords} />
            <link rel='canonical' href={meta.canonical} />
            <meta property="og:type" content="website" />
            {/* {meta.langLinks.map((langLink, i) => <link key={i} rel='alternate' hreflang={langLink.lang} href={langLink.link} />)} */}
        </ReactHelmet>;
    }
}

export default withRouter(Helmet);
