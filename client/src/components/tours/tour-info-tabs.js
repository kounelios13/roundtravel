import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import TourIncluded from "./tour-included";
import TourCitiesVisited from "./tour-cities-visited";

class TourInfoTabs extends Component {
    render() {
        return (
            <div>
                <div className={'my-6 ' + this.props.additionalClasses}>
                    <h2 className='display-6'>Γνωρίστε το Παρισί</h2>
                    <Tabs className='mt-4'>
                        <TabList>
                            <Tab>Περιλαμβανομενα</Tab>
                            <Tab>Προορισμοί</Tab>
                            <Tab>Εκδηλωσεις</Tab>
                        </TabList>
                        <TabPanel>
                            <TourCitiesVisited />
                        </TabPanel>
                        <TabPanel>
                            <TourIncluded />
                        </TabPanel>
                        <TabPanel>
                            <p>Lorem ipsum dolor sit amet, consectetur t. Aut beatae, hic incidunt non odio porro quaerat repudiandae voluptas! Ad eaque excepturi modi perferendis quae tempora temporibus ullam. A accusamus architecto aut consequuntur cum debitis doloremque dolorum esse est explicabo fuga, ipsam itaque obcaecati officiis optio porro quis reiciendis vero voluptas voluptatem! Animi culpa eaque est facilis iure, maxime nam nesciunt obcaecati pariatur quis ratione rem tenetur ut velit voluptas voluptate voluptatem? Consequatur culpa deserunt ea fugiat hic minima neque omnis optio quaerat quasi quia ratione veniam, voluptate. Ab aliquid, at explicabo in magni nobis porro quia quos ratione recusandae sit?</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default TourInfoTabs;