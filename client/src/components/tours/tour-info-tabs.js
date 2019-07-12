import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {FaCalendarCheck, FaCheck} from "react-icons/fa";

class TourInfoTabs extends Component {
    render() {
        return (
            <div>
                <div className={'my-6 ' + this.props.additionalClasses}>
                    <h2 className='display-6'>Γνωρίστε το Παρισί</h2>
                    <Tabs className='mt-4'>
                        <TabList>
                            <Tab selectedTabClassName={'activeTab'}>Περιλαμβανομενα</Tab>
                            <Tab>Φαγητο</Tab>
                            <Tab>Εκδηλωσεις</Tab>
                        </TabList>
                        <TabPanel>
                            <ul className='tour-included pl-3'>
                                <li><FaCheck /> Πτήσεις με KLM</li>
                                <li><FaCheck /> Ξενοδοχεία 4* και 5* ως ακολούθως ή παρόμοια</li>
                                <li><FaCheck /> Ξενάγηση της Λίμα και επίσκεψη στο Παγκοσμίως διάσημο Μουσείο του Χρυσού</li>
                                <li><FaCheck /> Μοναδικό πρόγραμμα με επίσκεψη στο Μουσείο Λάρκο Ερέρα με μια συλλογή που υπερβαίνει τα 45.000 αντικείμενα προϊνκαϊκών πολιτισμών και δείπνο στο εστιατόριο του μουσείου!</li>
                                <li><FaCheck /> Κρουαζιέρα στον υδροβιότοπο των Iσλας Mπαγιέστας</li>
                                <li><FaCheck /> Διανυκτέρευση στη Νάσκα και πτήση με ελαφρά αεροπλάνα πάνω από τις μυστηριώδεις γραμμές της</li>
                                <li><FaCheck /> Δυο διανυκτερεύσεις στην Αρεκίπα, γνωστή ως «Λευκή Πόλη», δεύτερη σε μέγεθος πόλη της χώρας με ξενάγηση</li>
                                <li><FaCheck /> Βαρκάδα στη λίμνη Τιτικάκα, όπου θα επισκεφθούμε τα μοναδικά «πλωτά νησιά» που είναι φτιαγμένα από καλάμια και που κατοικούνται εδώ και αιώνες από τους Ούρος</li>
                                <li><FaCheck /> Δύο (2) διανυκτερεύσεις στο Πούνο με μεστή ξενάγηση της πόλης και ξενάγηση στα Τσούλπας Σιλουστάνι</li>
                                <li><FaCheck /> Επίσκεψη στο Ράτσι, έναν ινκαϊκό αρχαιολογικό χώρο στον οποίο ξεχωρίζει ο ναός του θεού των Ίνκας, Βαϊρακότσα</li>
                                <li><FaCheck /> Θα επισκεφθούμε το Ολιανταϋτάμπο, χωριό μεγάλης στρατηγικής σημασίας τόσο για τους Ίνκας, όσο και για τους Ισπανούς και τη παραδοσιακή αγορά Τσίντσερο στο ομώνυμο χωριό</li>

                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolorem error eum fugit id inventore laborum nihil quisquam tenetur. Aliquam animi architecto at atque, cum delectus dolor earum eius enim eum facere id maiores neque nisi nulla obcaecati odio quas quia quibusdam rem reprehenderit saepe suscipit tempore temporibus ullam. Blanditiis enim esse est inventore nam nostrum quod reiciendis repellendus saepe totam. Animi aut debitis delectus eaque ipsum suscipit ut velit veritatis? Adipisci impedit molestiae sunt tempora! Dolores et explicabo id officiis recusandae repudiandae sint tenetur, voluptatum! Aspernatur at beatae dignissimos dolor eum harum id laboriosam minus officia placeat, possimus quam quibusdam quo, sit voluptate? A ad alias aliquid architecto corporis culpa delectus, deleniti deserunt distinctio earum enim ex explicabo fugiat ipsam labore libero magni maiores minima nam numquam omnis, placeat quo quod repellendus sint totam voluptatibus. Accusamus aliquid assumenda atque beatae blanditiis commodi consectetur consequuntur doloremque, eius enim esse fuga iste libero mollitia neque non nulla odio optio possimus quia quidem quis reprehenderit sit tempora temporibus, totam veniam voluptatem. A, aliquid autem commodi consequatur cupiditate dolor eaque eveniet fuga fugit harum in ipsum libero modi nihil obcaecati odit placeat praesentium quae quam quasi quis reprehenderit sapiente sit suscipit temporibus ullam veritatis? Minus nam quo tempore unde voluptatibus. Animi at atque dolore, ea excepturi laborum maxime perferendis provident quibusdam quis quisquam voluptate voluptates? Ad consequatur debitis eaque facere facilis in laborum natus, necessitatibus nulla obcaecati omnis quasi reiciendis soluta totam ut, vero voluptas. Asperiores aspernatur dolor dolorem, eum in ipsum iure iusto, magnam nemo officiis praesentium reprehenderit repudiandae tenetur! Ad, aspernatur eaque earum fugit, inventore maiores minima nesciunt officia perferendis perspiciatis quasi quo reiciendis sit suscipit ut, voluptatem voluptates! At cumque earum illo incidunt nostrum provident quasi recusandae voluptas. Doloribus est fugit libero nemo quibusdam ratione repudiandae temporibus totam veniam.</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, hic incidunt non odio porro quaerat repudiandae voluptas! Ad eaque excepturi modi perferendis quae tempora temporibus ullam. A accusamus architecto aut consequuntur cum debitis doloremque dolorum esse est explicabo fuga, ipsam itaque obcaecati officiis optio porro quis reiciendis vero voluptas voluptatem! Animi culpa eaque est facilis iure, maxime nam nesciunt obcaecati pariatur quis ratione rem tenetur ut velit voluptas voluptate voluptatem? Consequatur culpa deserunt ea fugiat hic minima neque omnis optio quaerat quasi quia ratione veniam, voluptate. Ab aliquid, at explicabo in magni nobis porro quia quos ratione recusandae sit?</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default TourInfoTabs;