import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import Header from "./Components/Header"
import Item from "./Components/Item"
import Search from "./Components/Search"
import NotFound from './Components/NotFound'
import PhotoContextProvider from "./context/photocontext"
import Footer from "./Components/Footer"


const App = () => {
    const handleSubmit = (e, history, searchInput) => {
        e.preventDefault()
        let url = `/search/${searchInput}`
        history.push(url)
    }

    return (
        <PhotoContextProvider>
            <HashRouter basename="/ReactGallery">
                <div className="container">
                    <Route
                        render={props => (
                            <Header
                                handleSubmit={handleSubmit}
                                history={props.history}
                            />
                        )}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/mountain" />}
                        />
                        <Route path="/mountain" render={() => <Item searchTerm="mountain" />} />
                        <Route path="/beach" render={() => <Item searchTerm="beach" />} />
                        <Route path="/bird" render={() => <Item searchTerm="bird" />} />
                        <Route path="/food" render={() => <Item searchTerm="food" />} />
                        <Route
                            path="/search/:searchInput"
                            render={props => (
                                <Search searchTerm={props.match.params.searchInput} />
                            )}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Route
                    render={() => (
                        <Footer />
                    )}
                />
            </HashRouter>
        </PhotoContextProvider>
    )
}

export default App
