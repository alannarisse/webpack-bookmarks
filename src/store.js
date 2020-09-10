let bookmarks = [];
let error;
let adding = false;
let rating = 0;


const findById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};

const addStars = function(rating) {
  let starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push('*');
  }
  return starArray;
};

const addBookmark = function(bookmark) {
  const newBookmark = Object.assign(bookmark, { expanded: false }, { ratingFilter: addStars(bookmark.rating) });
  this.bookmarks.push(newBookmark);
};

const findAndDelete = function(id) {
  this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
};

const findAndExpand = function(id) {
  let bookmark = this.findById(id);
  bookmark.expanded = true;
};

const findAndUpdate = function(id, newData) {
  const currentBookmark = this.findById(id);
  Object.assign(currentBookmark, newData);
};

const setError = function(error) {
  this.error = error;
};

const setFilter = function(filter) {
  this.filter = filter;
};



export default {
  bookmarks,
  error,
  adding,
  filter,
  findById,
  addBookmark,
  findAndDelete,
  findAndExpand,
  findAndUpdate,
  setError,
};