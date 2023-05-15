export default function validate(input) {
  let error = {};

  if (!input.name) {
    if (typeof input.name === "string") {
      error.name = "The entered value is not valid.";
    }
    error.name = "This field is required.";
  }
  if (
    !input.image.includes("https://" || "http://") ||
    !input.image.includes(".jpg" || ".png" || ".gif")
  ) {
    error.image = "Enter a valid URL (.jpg, .png, .gif)";
  }
  if (!input.description || input.description.length < 30 ||input.description.length > 200) {
    error.description = "Please, enter a minimum description of 30 characters.";
  }
  if (!input.released) {
    if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(input.released)
    ) {
      error.released = "Error.";
    }
  }
  if (!input.rating || input.rating < 0 || input.rating > 5) {
    error.rating = "The rating must be < 0 & > 5...";
  }
  // if (
  //   !input.website.includes("https://" || "http://") ||
  //   !input.website.includes(".com" || ".ar")
  // ) {
  //   error.website = "Enter a Valid URL (.com, .ar)";
  // }
  if (!input.genres.length) {
    error.genres = "This field is required.";
  }
  if (!input.platforms.length) {
    error.platforms = "This field is required.";
  }
  return error;
}
