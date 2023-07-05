import React from 'react'

export default function PostItem() {
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src='https://images.unsplash.com/photo-1656105544318-1cca8c4d9878?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80'
          loading='lazy'
          alt='Mất niềm tin vào bản thân, cũng như bạn đánh mất thành công đang đợi mình'
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>2022-10-13T11:32</span>
        <h2 className='text-xl font-bold text-gray-800'>
          Mất niềm tin vào bản thân, cũng như bạn đánh mất thành công đang đợi mình
        </h2>
        <p className='text-gray-500'>
          Ai cũng nói tương lai chúng ta luôn rộng mở, nhưng nếu không nắm bắt được hiện tại thì tương lai sẽ chẳng có
          gì.
        </p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Edit
            </button>
            <button
              type='button'
              className='rounded-r-lg border-b border-r border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
