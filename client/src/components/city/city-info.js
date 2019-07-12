import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";

class CityInfo extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={'mb-6 ' + this.props.additionalClasses}>
                <h2 className='display-5'>Γνωρίστε το Παρισί</h2>
                <Tabs className='mt-5'>
                    <TabList>
                        <Tab>Δραστηριοτητες</Tab>
                        <Tab>Φαγητο</Tab>
                        <Tab>Εκδηλωσεις</Tab>
                    </TabList>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores excepturi illum nihil odit quia soluta, unde voluptates! Enim inventore mollitia quas totam unde? Ab aliquam assumenda culpa eum excepturi iusto perspiciatis quasi saepe tenetur. Excepturi nesciunt quasi sapiente! Accusantium atque fugiat minima molestiae odit officiis quae quibusdam sed? Alias, libero magnam magni natus neque placeat veritatis voluptates? Autem dolorem excepturi incidunt modi pariatur. Alias aspernatur atque aut dolor dolore doloremque ducimus excepturi expedita facere id ipsa iusto laudantium magnam necessitatibus, nostrum nulla possimus quam quas quasi quis quo ratione rem tenetur velit, voluptatum? Aliquam cupiditate enim esse ex, in ipsum iste necessitatibus nemo nesciunt quibusdam, recusandae reprehenderit sequi sit totam voluptatum. A alias animi architecto commodi cumque dolores dolorum earum eius eum explicabo harum illo magni, maiores minima nam officia, omnis perspiciatis, placeat quaerat quisquam repudiandae sapiente sint voluptates? Adipisci esse explicabo magnam omnis voluptates. Amet aspernatur at beatae, blanditiis dolore dolorum ea inventore ipsa libero nihil nobis odio perferendis perspiciatis placeat porro quae recusandae rerum tempora tempore, tenetur unde vel, velit voluptatibus. Architecto quae unde voluptatem? Aperiam excepturi exercitationem fugit nobis veniam. Blanditiis cumque deleniti dolorum error et, labore laudantium maxime modi necessitatibus nihil non optio praesentium quaerat quibusdam recusandae reiciendis repellat. In modi natus suscipit tempore. Animi delectus dicta in magni minus molestias necessitatibus numquam officia quasi qui, quo quod sed sit tenetur vel! Ducimus incidunt inventore maxime sunt tempore! Corporis cum error iure labore nemo neque suscipit! Aspernatur doloremque, et, ipsam itaque laudantium libero minima modi nam odit officia porro qui rerum temporibus. Consectetur maiores molestiae neque odit quisquam repellendus voluptatibus. Accusamus amet architecto dignissimos dolore eos eveniet excepturi explicabo illum natus numquam, officiis praesentium, quae quia quisquam sequi sunt voluptate! Cum deleniti eius esse est et exercitationem id laborum, minus modi nam odio provident quod reprehenderit repudiandae rerum saepe sapiente vel voluptate. Ad animi cupiditate, delectus dolore ducimus eaque eligendi, exercitationem ipsa iste laborum optio possimus quia quis quos tempora vel voluptatibus. Ab, asperiores aut beatae commodi consequatur culpa, dignissimos eos eum id magni, molestias non odit pariatur possimus quae rem sequi sint sit tempore voluptatibus. Amet autem corporis cumque dolorem eaque, eligendi error ex exercitationem fuga illo iusto odit officiis quam quasi quia ratione sapiente sint soluta tempora voluptatibus. Alias aperiam ipsum rerum temporibus. Aliquam dolores libero odio optio quae sequi vitae, voluptatem. Autem beatae cum, dolor excepturi impedit maiores nemo repudiandae sapiente temporibus?</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolorem error eum fugit id inventore laborum nihil quisquam tenetur. Aliquam animi architecto at atque, cum delectus dolor earum eius enim eum facere id maiores neque nisi nulla obcaecati odio quas quia quibusdam rem reprehenderit saepe suscipit tempore temporibus ullam. Blanditiis enim esse est inventore nam nostrum quod reiciendis repellendus saepe totam. Animi aut debitis delectus eaque ipsum suscipit ut velit veritatis? Adipisci impedit molestiae sunt tempora! Dolores et explicabo id officiis recusandae repudiandae sint tenetur, voluptatum! Aspernatur at beatae dignissimos dolor eum harum id laboriosam minus officia placeat, possimus quam quibusdam quo, sit voluptate? A ad alias aliquid architecto corporis culpa delectus, deleniti deserunt distinctio earum enim ex explicabo fugiat ipsam labore libero magni maiores minima nam numquam omnis, placeat quo quod repellendus sint totam voluptatibus. Accusamus aliquid assumenda atque beatae blanditiis commodi consectetur consequuntur doloremque, eius enim esse fuga iste libero mollitia neque non nulla odio optio possimus quia quidem quis reprehenderit sit tempora temporibus, totam veniam voluptatem. A, aliquid autem commodi consequatur cupiditate dolor eaque eveniet fuga fugit harum in ipsum libero modi nihil obcaecati odit placeat praesentium quae quam quasi quis reprehenderit sapiente sit suscipit temporibus ullam veritatis? Minus nam quo tempore unde voluptatibus. Animi at atque dolore, ea excepturi laborum maxime perferendis provident quibusdam quis quisquam voluptate voluptates? Ad consequatur debitis eaque facere facilis in laborum natus, necessitatibus nulla obcaecati omnis quasi reiciendis soluta totam ut, vero voluptas. Asperiores aspernatur dolor dolorem, eum in ipsum iure iusto, magnam nemo officiis praesentium reprehenderit repudiandae tenetur! Ad, aspernatur eaque earum fugit, inventore maiores minima nesciunt officia perferendis perspiciatis quasi quo reiciendis sit suscipit ut, voluptatem voluptates! At cumque earum illo incidunt nostrum provident quasi recusandae voluptas. Doloribus est fugit libero nemo quibusdam ratione repudiandae temporibus totam veniam.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, hic incidunt non odio porro quaerat repudiandae voluptas! Ad eaque excepturi modi perferendis quae tempora temporibus ullam. A accusamus architecto aut consequuntur cum debitis doloremque dolorum esse est explicabo fuga, ipsam itaque obcaecati officiis optio porro quis reiciendis vero voluptas voluptatem! Animi culpa eaque est facilis iure, maxime nam nesciunt obcaecati pariatur quis ratione rem tenetur ut velit voluptas voluptate voluptatem? Consequatur culpa deserunt ea fugiat hic minima neque omnis optio quaerat quasi quia ratione veniam, voluptate. Ab aliquid, at explicabo in magni nobis porro quia quos ratione recusandae sit?</p>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default CityInfo;