class Action < ApplicationRecord
  after_create :add_id_in_options

  # Associations
  belongs_to :widget
  has_one :reaction

  def add_id_in_options
    self.options["action_id"] = self.id
    self.save
  end
end
