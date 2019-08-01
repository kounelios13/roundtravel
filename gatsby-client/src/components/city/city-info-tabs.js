import React from "react"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowMore from "react-show-more"
import '../../styles/city/city-info-tabs.scss'

const CityInfoTabs = () => {
  return (
    <section className='col-10 offset-1 col-lg-8 offset-lg-2 mt-6'>
      <div className={'m-0 p-0'}>
        <div className="col-12 space-candy">
          <h2 className='display-5 m-0 text-normal'>Μάθετε τα παντα για το Παρίσι.</h2>
          <h4 className='display-8 m-1'>Ανακαλυψτε τα μυστικα του Παρισιου</h4>
        </div>
        <Tabs className='mt-5'>
          <TabList>
            <Tab>Δραστηριοτητες</Tab>
            <Tab>Φαγητο</Tab>
            <Tab>Εκδηλωσεις</Tab>
            <Tab>Εκδηλωσεις</Tab>
          </TabList>
          <TabPanel id={'activites-panel'}>
            <article className='tab-article'>
              <h3 className='pb-1'> Δραστηριοτητα 1</h3>
              <ShowMore
                lines={3}
                more='Διαβάστε περισσότερα'
                less='Απόκρυψη'
                anchorClass='app-show-more'
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti doloribus enim laboriosam nulla quasi reprehenderit voluptate. Ad culpa, dolorem doloremque ea earum exercitationem impedit itaque labore laudantium minus nobis, officiis optio pariatur praesentium ratione rem totam ullam unde! Adipisci alias architecto, autem consequatur culpa cum cupiditate dignissimos doloribus eius est in iusto nesciunt nobis, optio pariatur qui quo repellat reprehenderit similique tempora temporibus ullam velit veniam veritatis vitae. Autem fugiat hic iusto nulla quis? Blanditiis, commodi est fugit hic nihil nisi placeat reiciendis sapiente sint velit! A ad aspernatur consequatur culpa cumque delectus deserunt dignissimos dolor earum enim excepturi facere incidunt iste itaque nam nostrum odit officia, optio perspiciatis placeat recusandae reiciendis saepe sapiente similique tenetur velit voluptatem. Accusamus accusantium aliquam architecto aspernatur consectetur dignissimos dolore eum exercitationem ipsum magni necessitatibus nesciunt, officia porro quidem quod sunt vitae? A aspernatur consectetur cupiditate dolor maiores mollitia, quae quas vero? Dolores modi, mollitia. Adipisci, reiciendis, repudiandae. '
                }
              </ShowMore>
            </article>
            <article className='tab-article'>
              <h3>Δραστηριοτητα 1</h3>
              <ShowMore
                lines={3}
                more='Διαβάστε περισσότερα'
                less='Απόκρυψη'
                anchorClass='app-show-more'
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti doloribus enim laboriosam nulla quasi reprehenderit voluptate. Ad culpa, dolorem doloremque ea earum exercitationem impedit itaque labore laudantium minus nobis, officiis optio pariatur praesentium ratione rem totam ullam unde! Adipisci alias architecto, autem consequatur culpa cum cupiditate dignissimos doloribus eius est in iusto nesciunt nobis, optio pariatur qui quo repellat reprehenderit similique tempora temporibus ullam velit veniam veritatis vitae. Autem fugiat hic iusto nulla quis? Blanditiis, commodi est fugit hic nihil nisi placeat reiciendis sapiente sint velit! A ad aspernatur consequatur culpa cumque delectus deserunt dignissimos dolor earum enim excepturi facere incidunt iste itaque nam nostrum odit officia, optio perspiciatis placeat recusandae reiciendis saepe sapiente similique tenetur velit voluptatem. Accusamus accusantium aliquam architecto aspernatur consectetur dignissimos dolore eum exercitationem ipsum magni necessitatibus nesciunt, officia porro quidem quod sunt vitae? A aspernatur consectetur cupiditate dolor maiores mollitia, quae quas vero? Dolores modi, mollitia. Adipisci, reiciendis, repudiandae. '
                }
              </ShowMore>
            </article>
            <article className='tab-article'>
              <h3>Δραστηριοτητα 1</h3>
              <ShowMore
                lines={3}
                more='Διαβάστε περισσότερα'
                less='Απόκρυψη'
                anchorClass='app-show-more'
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti doloribus enim laboriosam nulla quasi reprehenderit voluptate. Ad culpa, dolorem doloremque ea earum exercitationem impedit itaque labore laudantium minus nobis, officiis optio pariatur praesentium ratione rem totam ullam unde! Adipisci alias architecto, autem consequatur culpa cum cupiditate dignissimos doloribus eius est in iusto nesciunt nobis, optio pariatur qui quo repellat reprehenderit similique tempora temporibus ullam velit veniam veritatis vitae. Autem fugiat hic iusto nulla quis? Blanditiis, commodi est fugit hic nihil nisi placeat reiciendis sapiente sint velit! A ad aspernatur consequatur culpa cumque delectus deserunt dignissimos dolor earum enim excepturi facere incidunt iste itaque nam nostrum odit officia, optio perspiciatis placeat recusandae reiciendis saepe sapiente similique tenetur velit voluptatem. Accusamus accusantium aliquam architecto aspernatur consectetur dignissimos dolore eum exercitationem ipsum magni necessitatibus nesciunt, officia porro quidem quod sunt vitae? A aspernatur consectetur cupiditate dolor maiores mollitia, quae quas vero? Dolores modi, mollitia. Adipisci, reiciendis, repudiandae. '
                }
              </ShowMore>
            </article>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolorem error eum fugit id inventore laborum nihil quisquam tenetur. Aliquam animi architecto at atque, cum delectus dolor earum eius enim eum facere id maiores neque nisi nulla obcaecati odio quas quia quibusdam rem reprehenderit saepe suscipit tempore temporibus ullam. Blanditiis enim esse est inventore nam nostrum quod reiciendis repellendus saepe totam. Animi aut debitis delectus eaque ipsum suscipit ut velit veritatis? Adipisci impedit molestiae sunt tempora! Dolores et explicabo id officiis recusandae repudiandae sint tenetur, voluptatum! Aspernatur at beatae dignissimos dolor eum harum id laboriosam minus officia placeat, possimus quam quibusdam quo, sit voluptate? A ad alias aliquid architecto corporis culpa delectus, deleniti deserunt distinctio earum enim ex explicabo fugiat ipsam labore libero magni maiores minima nam numquam omnis, placeat quo quod repellendus sint totam voluptatibus. Accusamus aliquid assumenda atque beatae blanditiis commodi consectetur consequuntur doloremque, eius enim esse fuga iste libero mollitia neque non nulla odio optio possimus quia quidem quis reprehenderit sit tempora temporibus, totam veniam voluptatem. A, aliquid autem commodi consequatur cupiditate dolor eaque eveniet fuga fugit harum in ipsum libero modi nihil obcaecati odit placeat praesentium quae quam quasi quis reprehenderit sapiente sit suscipit temporibus ullam veritatis? Minus nam quo tempore unde voluptatibus. Animi at atque dolore, ea excepturi laborum maxime perferendis provident quibusdam quis quisquam voluptate voluptates? Ad consequatur debitis eaque facere facilis in laborum natus, necessitatibus nulla obcaecati omnis quasi reiciendis soluta totam ut, vero voluptas. Asperiores aspernatur dolor dolorem, eum in ipsum iure iusto, magnam nemo officiis praesentium reprehenderit repudiandae tenetur! Ad, aspernatur eaque earum fugit, inventore maiores minima nesciunt officia perferendis perspiciatis quasi quo reiciendis sit suscipit ut, voluptatem voluptates! At cumque earum illo incidunt nostrum provident quasi recusandae voluptas. Doloribus est fugit libero nemo quibusdam ratione repudiandae temporibus totam veniam.</p>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, hic incidunt non odio porro quaerat repudiandae voluptas! Ad eaque excepturi modi perferendis quae tempora temporibus ullam. A accusamus architecto aut consequuntur cum debitis doloremque dolorum esse est explicabo fuga, ipsam itaque obcaecati officiis optio porro quis reiciendis vero voluptas voluptatem! Animi culpa eaque est facilis iure, maxime nam nesciunt obcaecati pariatur quis ratione rem tenetur ut velit voluptas voluptate voluptatem? Consequatur culpa deserunt ea fugiat hic minima neque omnis optio quaerat quasi quia ratione veniam, voluptate. Ab aliquid, at explicabo in magni nobis porro quia quos ratione recusandae sit?</p>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default CityInfoTabs