import { Request, Response } from 'express';
import prisma from '../../lib/prisma';

// GET /api/careers
export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const careers = await prisma.career.findMany({
      where: { isActive: true },
      orderBy: { postedAt: 'desc' }
    });
    res.status(200).json(careers);
  } catch (error) {
    console.error('Error fetching careers:', error);
    res.status(500).json({ message: 'Failed to fetch career listings' });
  }
};

// POST /api/careers
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      title, 
      description, 
      location, 
      department, 
      type, 
      requirements, 
      salary, 
      closingDate 
    } = req.body;

    // Validate required fields
    if (!title || !description || !location || !department || !type || !requirements) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    const newCareer = await prisma.career.create({
      data: {
        title,
        description,
        location,
        department,
        type,
        requirements,
        salary: salary || null,
        closingDate: closingDate ? new Date(closingDate) : null,
      }
    });

    res.status(201).json(newCareer);
  } catch (error) {
    console.error('Error creating career posting:', error);
    res.status(500).json({ message: 'Failed to create career posting' });
  }
};

// GET /api/careers/:id
export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const career = await prisma.career.findUnique({
      where: { id }
    });

    if (!career) {
      res.status(404).json({ message: 'Career posting not found' });
      return;
    }

    res.status(200).json(career);
  } catch (error) {
    console.error('Error fetching career:', error);
    res.status(500).json({ message: 'Failed to fetch career posting' });
  }
};

// DELETE /api/careers/:id
export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.career.delete({
      where: { id }
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting career:', error);
    res.status(500).json({ message: 'Failed to delete career posting' });
  }
};