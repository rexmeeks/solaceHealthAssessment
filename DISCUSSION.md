## Extra things I would have done
* to speed things up and keep in consideration with the fact there would be hundreds of thousands of advocates I would refactor search
  to use pagination. Right now it's setup as a sort of filter, which works okay with a small amount of data, but with a large amount of data
  it'll be entirely too slow if being handled purely on the front end
  * I'd setup the backend to use pagination and then turn the call for getting results to include a search term
  as well as whatever other params we'd want a user to be able to search on, like years of experience
  * Would need to modify the way the data is retrieved from the db