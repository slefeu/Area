# == Schema Information
#
# Table name: reactions
#
#  id         :bigint           not null, primary key
#  klass      :string           not null
#  options    :jsonb            not null
#  action_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
