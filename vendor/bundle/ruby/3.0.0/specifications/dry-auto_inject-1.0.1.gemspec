# -*- encoding: utf-8 -*-
# stub: dry-auto_inject 1.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "dry-auto_inject".freeze
  s.version = "1.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org", "bug_tracker_uri" => "https://github.com/dry-rb/dry-auto_inject/issues", "changelog_uri" => "https://github.com/dry-rb/dry-auto_inject/blob/main/CHANGELOG.md", "source_code_uri" => "https://github.com/dry-rb/dry-auto_inject" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Piotr Solnica".freeze]
  s.date = "2023-02-13"
  s.description = "Container-agnostic automatic constructor injection".freeze
  s.email = ["piotr.solnica@gmail.com".freeze]
  s.homepage = "https://dry-rb.org/gems/dry-auto_inject".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.7.0".freeze)
  s.rubygems_version = "3.2.15".freeze
  s.summary = "Container-agnostic automatic constructor injection".freeze

  s.installed_by_version = "3.2.15" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<dry-core>.freeze, ["~> 1.0"])
    s.add_runtime_dependency(%q<zeitwerk>.freeze, ["~> 2.6"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  else
    s.add_dependency(%q<dry-core>.freeze, ["~> 1.0"])
    s.add_dependency(%q<zeitwerk>.freeze, ["~> 2.6"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
  end
end
