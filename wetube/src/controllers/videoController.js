export const trending = (req, res) => {
  res.end("trend");
};
export const see = (req, res) => {
  return res.send("watch");
};
export const edit = (req, res) => {
  return res.send("edit");
};
export const search = (req, res) => {
  res.send("search");
};
export const upload = (req, res) => {
  res.send("upload");
};
export const deleteVideo = (req, res) => {
  return res.send("deleteVideo");
};
