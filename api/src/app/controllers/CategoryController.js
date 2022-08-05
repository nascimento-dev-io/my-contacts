const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;

    const { name } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryUpdated = await CategoryRepository.update(id, {
      name,
    });

    response.json(categoryUpdated);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
