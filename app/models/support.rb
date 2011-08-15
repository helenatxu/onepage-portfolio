# app/models/support.rb
class Support
  include ActiveModel::Validations

  validates_presence_of :email, :content
  validates :email, :format => {:with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i}

  #to deal with form, you must have an id attribute
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

  # HUMANIZED_ATTRIBUTES = {
  #   :email => I18n.t(:email),
  #    :sender_name => I18n.t(:name),
  #   :content => I18n.t(:message)
  # }
  # 
  # def self.human_attribute_name(attr, options={})
  #   HUMANIZED_ATTRIBUTES[attr.to_sym] || super
  # end

  def self.human_attribute_name(attribute_key_name, options={})
    # Get all the columns in the Model's DB table as symbols

    localized_name = ""

    attribute_key_name.to_sym == :email ? localized_name = I18n.translate(:email) : super 
    attribute_key_name.to_sym == :content ? localized_name = I18n.translate(:content) : super 
    attribute_key_name.to_sym == :sender_name ? localized_name = I18n.translate(:sender_name) : super 

    return localized_name
  end

end