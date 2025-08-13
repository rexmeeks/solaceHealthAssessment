## Extra things I would have done
### Pagination
* to speed things up and keep in consideration with the fact there would be hundreds of thousands of advocates I would refactor search
  to use pagination. Right now it's setup as a sort of filter, which works okay with a small amount of data, but with a large amount of data
  it'll be entirely too slow if being handled purely on the front end
  * I'd setup the backend to use pagination and then turn the call for getting results to include a search term
  as well as whatever other params we'd want a user to be able to search on, like years of experience
  * Would need to modify the way the data is retrieved from the db

### Improved search
* search seems a little vague, it's hard to know what you're really searching on. So, I'd like to take some time to figure out a solution
 to better communicate to users what they're searching on field wise AND show them in the results where their search term is

### Modern page design
* Would like to spend some time just making the page look better as a whole. Would probably refactor it into rows that are more presentable
  and not just a table. Basically creating a card for each of the rows that are styled.