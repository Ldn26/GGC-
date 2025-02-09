"use server";
import { connect } from "../db";
import Job_offert from "../modals/job_request.modal";

export async function createFeed(offert: any) {
  try {
    await connect();
    const newoffert = await Job_offert.create(offert);
    return JSON.parse(JSON.stringify(newoffert));
  } catch (error) {
    console.log(error);
  }
}