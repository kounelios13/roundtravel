import React from "react"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowMore from "react-show-more"
import '../../styles/city/city-info-tabs.scss'

const CityInfoTabs = (props) => {
  return (
    <section className='col-10 offset-1 col-lg-8 offset-lg-2 mt-6'>
      <div className={'m-0 p-0'}>
        <div className="col-12 space-candy">
          <h2 className='display-5 m-0 text-bold'>{props.infoTitle}</h2>
          <h4 className='display-8 m-1'>{props.infoSubtitle}</h4>
        </div>
        <Tabs className='mt-5'>
          <TabList>
            {
              props.cityInfo.map(info=>{
                return <Tab>{info.title}</Tab>
              })
            }
          </TabList>
            {
              props.cityInfo.map(info=>{

                return (
                  <TabPanel>
                    {
                      info.content.map(section=>{
                        return (
                          <article className='tab-article'>
                            <h3 className={'m-0 p-0 text-normal'}>{section.name}</h3>
                            <div className={'text-secondary'}>
                              <ShowMore
                                lines={3}
                                more='Διαβάστε περισσότερα'
                                less='Απόκρυψη'
                                anchorClass='app-show-more'
                              >
                              {section.text}
                              </ShowMore>
                            </div>
                          </article>
                        )
                      })
                    }
                  </TabPanel>
                )
              })
            }
        </Tabs>
      </div>
    </section>
  )
}

export default CityInfoTabs