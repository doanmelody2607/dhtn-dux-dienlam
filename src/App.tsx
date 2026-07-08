import { FC } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts';
import { publicRoutes } from '~/routes';
import ScrollToTop from '~/utils/ScrollToTop';

const App: FC = () => {
    return (
        <Router>
            <ScrollToTop />

            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
