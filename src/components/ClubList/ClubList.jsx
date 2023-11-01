import {useEffect, useState} from 'react'

import ClubCard from '../Card/ClubCard'
import ClubsService from '../../services/clubsService'

const ClubList = (props) => {
  const [clubs, setClubs] = useState(null)

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const {params} = props
        const clubsData = await ClubsService.getAllClubs(
          params.pageNumber,
          params.pageSize,
          params.name,
          params.location,
          params.bannerImage,
          params.date,
          params.type
        )

        setClubs(clubsData.clubs)

        if (props.setNumberOfPages) {
          props.setNumberOfPages(clubsData.numberOfPages)
        }
        if (props.setNumberOfClubs) {
          props.setNumberOfClubs(clubsData.numberOfClubs)
        }
      } catch (error) {
        // Handle any errors here
      }
    }

    fetchClubs()
  }, [props.params])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-10">
      {clubs &&
        clubs.map((card) => {
          return <ClubCard page={'/club/' + card._id} key={card._id} card={card} button={props.button} />
        })}
    </div>
  )
}

export default ClubList
