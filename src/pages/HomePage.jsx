import Header from "../components/Header/Header";
import Grid from "../components/Grid/Grid";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main>
                <h2>Welcome to the Home Page!</h2>
                <Grid>
                    <div className="grid-Item">Item 1</div>
                    <div className="grid-Item">Item 2</div>
                    <div className="grid-Item">Item 3</div>
                    <div className="grid-Item">Item 4</div>
                    <div className="grid-Item">Item 5</div>
                </Grid>
            </main>
        </div>
    )
}

export default HomePage