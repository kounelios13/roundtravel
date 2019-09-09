import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import ShowMore from "react-show-more"
import PropTypes from "prop-types";

const InfoTabs = (props) => {
  return (
    <Tabs className={`${props.className}`}>
      <TabList>
        {
          props.tabInfo.map(info=>{
            return <Tab>{info.title}</Tab>
          })
        }
      </TabList>
      {
        props.tabInfo.map(info=>{
          return (
            <TabPanel>
              {
                info.content.map((section,i)=>{
                  return (
                    i < (props.limitSections) &&
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
  )
}

InfoTabs.propTypes = {
  tabInfo: PropTypes.array.isRequired,
  className: PropTypes.string
}

InfoTabs.defaultProps = {
  limitSections: 100
}

export default InfoTabs