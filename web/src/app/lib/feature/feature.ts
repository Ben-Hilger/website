export default class Feature {

  static showHiddenFeatures() {
    return process.env.NODE_ENV !== "production";
  }
}