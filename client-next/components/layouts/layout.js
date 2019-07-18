import AppRouter from "../static/app-router";



const withLayout = Page => {
    return () => (
        <div>
            <AppRouter />
            <Page />
        </div>
    );
};

export default withLayout;