import AppRouter from "../static/app-router";
import '../../styles/main.scss'


const withLayout = (Page) => {
    return class extends React.Component {
        static getInitialProps(ctx) {
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
            return {}
        }

        render() {
            return (
                <div>
                    <AppRouter/>
                    <Page {...this.props}/>
                </div>
            )
        }
    }
}

export default withLayout