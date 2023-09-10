export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Happy Readers</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BookHouse has the best selection of books online.</h3>
                      <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Bonnie Green</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Book blogger and avid reader</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ordering from BookHouse is a breeze with great customer service.</h3>
                      <p className="my-4 font-light">BookHouse offers competitive prices, excellent customer service, and a user-friendly website.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Jessica R.</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Freelance writer and book club member</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Love the fast shipping and prices at BookHouse.</h3>
                      <p className="my-4 font-light">Ordering from BookHouse is easy, with fast delivery times and responsive customer service.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Jese Leos</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">College student and book collector</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thanks to BookHouse, I always find new and interesting books to read.</h3>
                      <p className="my-4 font-light">BookHouse provides curated lists and recommendations, making it easy to find new and interesting books to read.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Joseph McFall</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">High school English teacher</div>
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </section>
    )
  }