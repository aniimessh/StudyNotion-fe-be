import React from 'react'

const CourseAuthorSection = ({coursePageData}) => {
  return (
    <div>
      <div>
          <p className="text-xl font-inter text-white font-semibold">Author</p>
          <div className='mt-3 flex items-center gap-x-3'>
              <img src={coursePageData?.instructor?.image} alt="instructor-image" width={52} className="rounded-full"/>
              <p className='text-white font-medium font-inter'>{coursePageData?.instructor?.firstName} {coursePageData?.instructor?.lastName}</p>
          </div>
          <div>{coursePageData?.instructor?.additionalDetails?.about ? coursePageData?.instructor?.additionalDetails?.about : ""}</div>
      </div>
    </div>
  )
}

export default CourseAuthorSection
