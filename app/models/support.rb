# app/models/support.rb
class Support
  include ActiveModel::Validations

  validates_presence_of :email, :sender_name, :content
  # to deal with form, you must have an id attribute
  attr_accessor :id, :email, :sender_name, :content


  def initialize(attributes = {})
    attributes.each do |key, value|
      self.send("#{key}=", value)
    end
    @attributes = attributes
  end

  def read_attribute_for_validation(key)
    @attributes[key]
  end

  def to_key
  end

  def save
    if self.valid?
      Notifier.support_notification(self).deliver
      return true
    end
    return false
  end
  
  HUMANIZED_ATTRIBUTES = {
      :email => I18n.t(:email),
      :sender_name => I18n.t(:name),
      :content => I18n.t(:message)
    }

    def self.human_attribute_name(attr, options={})
      HUMANIZED_ATTRIBUTES[attr.to_sym] || super
    end

end