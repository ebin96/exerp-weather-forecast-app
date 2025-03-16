import express from "express";
import { sendError, sendResponse } from "../shared/server-response";
import * as locationService from "../services/location.service";

const router = express.Router();

router.get("/details", async function (req, res) {
  let lat = Number(req.query.lat);
  let lng = Number(req.query.lng);

  let response;
  try {
    response = await locationService.getLocationInfo(lat, lng);
  } catch (e) {
    return sendError(res, e);
  }

  return sendResponse(res, response);
});

module.exports = router;
