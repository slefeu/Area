class Reaction < ApplicationRecord
  # Callbacks
  after_create :add_id_informations

  # Validations
  validate :klass_exist?

  # Associations
  belongs_to :action

  def klass_exist?
    (klass.camelize+"Command").constantize
  rescue NameError => e
    errors.add(:reaction, "Reaction '#{klass}' doesn't exist")
    false
  else
    true
  end

  def add_id_informations
    self.options["reaction_id"] = self.id
    self.save
  end

  def klass_command
    klass.camelize+"Command"
  end
end
