import Information from "../models/information.models";
import { Status } from "../models/types";

export const createInfo = async ({
  name,
  age,
}: {
  name: string;
  age: number;
}) => {
  try {
    return Information.create({ name, age });
  } catch (error) {
    console.log("🚀 ~ createInfo error:", error);
    throw error;
  }
};

export const getInfo = async (status = Status.ACTIVE) => {
  try {
    return Information.find({ status });
  } catch (error) {
    console.log("🚀 ~ getInfo error:", error);
    throw error;
  }
};

export const getInfoDetail = async (_id: string) => {
  try {
    // TODO: check status first and return 404 if not have active

    return Information.findOne({ _id, status: Status.ACTIVE });
  } catch (error) {
    console.log("🚀 ~ getInfoDetail error:", error);
    throw error;
  }
};

export const updateInfo = async (
  filter: { id: string },
  update: {
    name?: string;
    age?: number;
    status?: Status;
  }
) => {
  try {
    const { name, age, status } = update;
    // TODO: check status first and then update

    return Information.updateOne({ _id: filter.id }, { name, age, status });
  } catch (error) {
    console.log("🚀 ~ updateInfo error:", error);
    throw error;
  }
};
