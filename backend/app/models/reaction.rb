class Reaction < ApplicationRecord
  after_create :add_id_in_options

  # Associations
  belongs_to :action

  def add_id_in_options
    self.options["reaction_id"] = self.id
    self.save
  end
end
