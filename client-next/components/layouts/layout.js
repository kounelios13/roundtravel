import Header from "../static/app-router";



const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default withLayout;