import EventModel from "../models/EventModel.js";
import { EventSchema } from "../models/EventModel.js";

export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.find();

    if (!events) {
      return res.status(404).send('Did not find any event');
    };

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultTasks = events.slice(startIndex, endIndex);

    const completeResponse = {
      length: events.length,
      events: resultTasks.length > 0 ? resultTasks : events,
    };

    res.status(201).json(completeResponse);
  } catch (err) {
    res.status(404).send(err.message);
  };
}

export const postEvent = async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send('no data to process, please try fill out the form and try again');
  }

  const { error } = EventSchema.validate(req.body);
  if (error) {
    return res.status(400).send('please send the data in a proper format');
  }

  try {
    const eventExist = await EventModel.findOne({ name: data.name });
    if (eventExist) {
      return res.status(400).send('This event was already created');
    }

    const newEvent = await new EventModel(data);
    const postedData = await newEvent.save();

    if (!postedData) {
      return res.status(400).send('Something went wrong, please try again later');
    }

    res.status(201).send(postedData);
  } catch (err) {
    res.status(400).send(err.message);;
  };
}

export const updateEvent = async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send('no data to process, please try fill out the form and try again');
  }

  const { error } = EventSchema.validate(req.body);
  if (error) {
    return res.status(400).send('please send the data in a proper format');
  }

  const { previousName, name, description, date } = data;

  try {
    const updatedEvent = await EventModel.findOneAndUpdate({
      name: previousName
    }, {
      name: name,
      description: description,
      date: date,
    }, {
      returnNewDocument: true
    });

    if (!updatedEvent) {
      return res.status(400).send('Something went wrong, please try again later');
    }

    const response = {
      name: name,
      description: description,
      date: date
    }

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(err.message);;
  };
}

export const deleteEvent = async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send('no data to process, please try fill out the form and try again');
  }

  const { name } = data;

  try {
    const deletedEvent = await EventModel.findOneAndDelete({ name: name });
    if (!deletedEvent) {
      return res.status(404).send('Something went wrong, please try again later');
    }

    res.status(201).send(deletedEvent);
  } catch (err) {
    res.status(400).send(err.message);;
  };
}