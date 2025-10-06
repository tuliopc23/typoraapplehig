# OpenSpec Workflow Guide

## Overview
OpenSpec is a spec-driven development methodology that helps maintain clear requirements and organized development through three stages: Creating Changes (proposals), Implementing Changes (development), and Archiving Changes (documentation). This guide explains how to work with OpenSpec on this project.

## The Three-Stage Workflow

### Stage 1: Creating Changes (Planning)
This stage happens **before any code is written**. You create a change proposal when you want to add features, make breaking changes, modify architecture, or implement significant improvements.

#### When to Create a Proposal
Create a proposal for:
- ✅ New features or functionality (like the iA Writer template we just proposed)
- ✅ Breaking changes (API changes, schema changes)
- ✅ Architecture changes (new patterns, refactoring)
- ✅ Performance optimizations that change behavior
- ✅ Security pattern updates

Skip proposals for:
- ❌ Bug fixes that restore intended behavior
- ❌ Typos, formatting, comments
- ❌ Dependency updates (non-breaking)
- ❌ Configuration changes
- ❌ Tests for existing behavior

#### Creating a Proposal
1. **Review context**: Run `openspec list --specs` and `openspec list` to see what exists
2. **Choose a change-id**: Use kebab-case, verb-led names like `add-iawriter-template`, `update-dark-mode-colors`, `remove-legacy-fonts`
3. **Scaffold the structure**:
   ```bash
   mkdir -p openspec/changes/[change-id]/specs/[capability]
   ```

4. **Create proposal.md**: Explain why, what changes, and impact
5. **Create tasks.md**: Break down implementation into checkable tasks
6. **Create design.md** (if needed): Document technical decisions for complex changes
7. **Create spec deltas**: Write `specs/[capability]/spec.md` with ADDED/MODIFIED/REMOVED requirements
8. **Validate**: Run `openspec validate [change-id] --strict` before sharing

#### Spec Delta Format
Use these headers in your spec.md files:
- `## ADDED Requirements` - New capabilities
- `## MODIFIED Requirements` - Changed behavior (include full updated requirement)
- `## REMOVED Requirements` - Deprecated features (include reason and migration)
- `## RENAMED Requirements` - Name changes

Every requirement MUST have at least one scenario:
```markdown
### Requirement: Feature Name
The system SHALL provide...

#### Scenario: Success case
- **WHEN** user performs action
- **THEN** expected result occurs
```

### Stage 2: Implementing Changes (Development)
This stage happens **after the proposal is reviewed and approved**.

#### Implementation Process
1. **Read proposal.md** - Understand what's being built
2. **Read design.md** (if exists) - Review technical decisions
3. **Read tasks.md** - Get your implementation checklist
4. **Implement tasks sequentially** - Work through the task list in order
5. **Test as you go** - Validate changes don't break existing behavior
6. **Update checklist** - Mark tasks as `- [x]` when complete
7. **Validate completion** - Ensure every task is done before moving on

#### Implementation Tips
- Make minimal, surgical changes
- Only fix bugs related to your task
- Ignore unrelated broken tests
- Update documentation if directly related to your changes
- Run linters, builds, and tests before and after changes

### Stage 3: Archiving Changes (Documentation)
This stage happens **after deployment to production**.

#### Archiving Process
Create a separate PR to:
1. Move `openspec/changes/[name]/` → `openspec/changes/archive/YYYY-MM-DD-[name]/`
2. Update `openspec/specs/` to reflect the new capabilities if they changed
3. Run `openspec validate --strict` to confirm everything is correct

#### Archive Commands
```bash
# Standard archive (updates specs)
openspec archive [change-id]

# Archive tooling-only changes (skip spec updates)
openspec archive [change-id] --skip-specs --yes

# Non-interactive mode
openspec archive [change-id] --yes
```

## Working with Your Project

### Project Context
Your `openspec/project.md` now contains essential information about:
- **Purpose**: Apple HIG-compliant themes for markdown editors
- **Tech Stack**: CSS3, San Francisco fonts, design tokens
- **Conventions**: Code style, architecture patterns, testing
- **Constraints**: Technical (single CSS file), design (100% HIG compliance), business (MIT license)
- **Dependencies**: Embedded fonts, reference documentation

Before working on any task, read `project.md` to understand the project context.

### Your First Change Proposal
We just created `add-iawriter-template` which proposes converting your Typora theme to an iA Writer template. Here's what we created:

1. **proposal.md**: Explains why (expand to iA Writer users), what changes (create .iatemplate bundle), and impact (new capability, no breaking changes)

2. **tasks.md**: 11 major sections with detailed subtasks:
   - Research & Setup
   - Template Bundle Structure
   - HTML Templates
   - CSS Conversion
   - Font Integration
   - Dark Mode Support
   - Accessibility Features
   - Testing
   - Documentation
   - Quality Assurance
   - Release Preparation

3. **design.md**: Technical decisions including:
   - Bundle structure
   - Content sizing strategy (mapping iA Writer's 7 sizes to Apple HIG)
   - Design token organization
   - HTML template structure
   - Font loading strategy
   - Responsive behavior
   - Dark mode implementation
   - Risk mitigation

4. **specs/iawriter-templates/spec.md**: Complete requirements including:
   - Template bundle structure
   - Content size support
   - HTML template structure
   - CSS styling compliance
   - Dark mode adaptation
   - Responsive layout
   - Accessibility features
   - Export compatibility
   - Installation and usage
   - Design consistency

### Next Steps
1. **Review the proposal**: Read through all files in `openspec/changes/add-iawriter-template/`
2. **Request approval**: Share the proposal with stakeholders or reviewers
3. **Start implementation**: Once approved, work through `tasks.md` sequentially
4. **Track progress**: Mark tasks complete as you finish them
5. **Validate**: Test thoroughly at each stage
6. **Archive when done**: Move to archive after deployment

## Common OpenSpec Commands

### Essential Commands
```bash
# List all active changes
openspec list

# List all specifications
openspec list --specs

# Show details of a change or spec
openspec show [change-or-spec-name]

# Show just the deltas in a change
openspec show [change-id] --json --deltas-only

# Validate a change
openspec validate [change-id]

# Validate with strict checks
openspec validate [change-id] --strict

# Show differences a change introduces
openspec diff [change-id]

# Archive a completed change
openspec archive [change-id]

# Update OpenSpec instructions
openspec update
```

### Interactive Mode
```bash
# Show with selection prompt
openspec show

# Validate with selection prompt
openspec validate
```

## Best Practices

### Simplicity First
- Default to <100 lines of new code
- Single-file implementations until proven insufficient
- Avoid frameworks without clear justification
- Choose boring, proven patterns

### Only Add Complexity When
- Performance data shows current solution is too slow
- Concrete scale requirements demand it (>1000 users, >100MB data)
- Multiple proven use cases require abstraction

### Clear References
- Use `file.ts:42` format for code locations
- Reference specs as `specs/auth/spec.md`
- Link related changes and PRs

### Capability Naming
- Use verb-noun: `user-auth`, `payment-capture`, `iawriter-templates`
- Single purpose per capability
- 10-minute understandability rule
- Split if description needs "AND"

### Change ID Naming
- Use kebab-case: `add-iawriter-template`
- Verb-led prefixes: `add-`, `update-`, `remove-`, `refactor-`
- Ensure uniqueness (append `-2`, `-3` if needed)

## Troubleshooting

### "Change must have at least one delta"
- Check that `changes/[name]/specs/` exists with .md files
- Verify files have operation prefixes (`## ADDED Requirements`)

### "Requirement must have at least one scenario"
- Check scenarios use `#### Scenario:` format (4 hashtags)
- Don't use bullet points or bold for scenario headers

### Validation Failures
1. Run with `--strict` flag for details
2. Check JSON output: `openspec show [change] --json --deltas-only`
3. Verify spec file format
4. Ensure scenarios are properly formatted

## Example: Creating a New Change

Here's a complete example of creating a new change:

```bash
# 1. Review current state
openspec list --specs
openspec list

# 2. Create the structure
CHANGE=add-print-styles
mkdir -p openspec/changes/$CHANGE/specs/typora-theme

# 3. Create proposal
cat > openspec/changes/$CHANGE/proposal.md << 'EOF'
## Why
Users need optimized print styles for generating PDFs.

## What Changes
- Add @media print styles to Typora theme
- Optimize typography for print
- Handle page breaks properly

## Impact
- Affected specs: typora-theme
- Affected code: apple-hig.css
- No breaking changes
EOF

# 4. Create tasks
cat > openspec/changes/$CHANGE/tasks.md << 'EOF'
## 1. Implementation
- [ ] 1.1 Add @media print query
- [ ] 1.2 Optimize font sizes for print
- [ ] 1.3 Handle page breaks
- [ ] 1.4 Test PDF generation
EOF

# 5. Create spec delta
cat > openspec/changes/$CHANGE/specs/typora-theme/spec.md << 'EOF'
## ADDED Requirements
### Requirement: Print Styles
The system SHALL provide optimized styles for printing.

#### Scenario: PDF generation preserves formatting
- **WHEN** document is printed or exported to PDF
- **THEN** typography is optimized for print
- **AND** page breaks are handled appropriately
EOF

# 6. Validate
openspec validate $CHANGE --strict

# 7. If valid, commit and share for review
git add openspec/changes/$CHANGE
git commit -m "proposal: add print styles optimization"
```

## Summary

OpenSpec helps you:
1. **Plan thoroughly** before coding (Stage 1: Creating Changes)
2. **Implement systematically** with clear requirements (Stage 2: Implementing)
3. **Document accurately** what was built (Stage 3: Archiving)

The key principle: **Specs are truth. Changes are proposals. Keep them in sync.**

Your project now has:
- ✅ Populated `project.md` with complete context
- ✅ First change proposal `add-iawriter-template` ready for review
- ✅ Understanding of the OpenSpec workflow

You're ready to start working with OpenSpec on your Apple HIG theme project!
