# == Schema Information
#
# Table name: actions
#
#  id         :bigint           not null, primary key
#  klass      :string           not null
#  options    :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  widget_id  :bigint
#
# Indexes
#
#  index_actions_on_widget_id  (widget_id)
#
# Foreign Keys
#
#  fk_rails_...  (widget_id => widgets.id)
#
class Action < ApplicationRecord
  # Callbacks
  after_create :add_id_informations

  # Validations
  validate :klass_exist?

  # Associations
  belongs_to :widget
  has_one :reaction

  def klass_exist?
    (klass.camelize+"ActionCommand").constantize
  rescue NameError => e
    errors.add(:action, "Action '#{klass}' doesn't exist")
    false
  else
    true
  end

  def add_id_informations
    self.options["action_id"] = self.id
    self.save
  end

  def klass_command
    klass.camelize+"ActionCommand"
  end
end
